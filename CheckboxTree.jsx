import {useState} from 'react'
import PropTypes from 'prop-types'
import './CheckboxTree.css'

const TreeNode = ({node, onToggle}) => (
  <li className="tree-node">
    <label>
      <input
        type="checkbox"
        checked={node.checked}
        onChange={() => onToggle(node.id, !node.checked)}
      />
      {node.label}
    </label>
    {node.children && node.children.length > 0 && (
      <ul className="child-list">
        {node.children.map(child => (
          <TreeNode key={child.id} node={child} onToggle={onToggle} />
        ))}
      </ul>
    )}
  </li>
)

TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      }),
    ),
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default function CheckboxTree() {
  const [data, setData] = useState([
    {
      id: 'fruits',
      label: 'Fruits',
      checked: false,
      children: [
        {id: 'apple', label: 'Apple', checked: false},
        {id: 'mango', label: 'Mango', checked: false},
        {id: 'banana', label: 'Banana', checked: false},
      ],
    },
    {
      id: 'vegetables',
      label: 'Vegetables',
      checked: false,
      children: [
        {id: 'carrot', label: 'Carrot', checked: false},
        {id: 'broccoli', label: 'Broccoli', checked: false},
        {id: 'spinach', label: 'Spinach', checked: false},
      ],
    },
  ])

  const handleToggle = (id, isChecked) => {
    const updateNodes = nodes =>
      nodes.map(node => {
        if (node.id === id) {
          return {
            ...node,
            checked: isChecked,
            children: node.children
              ? node.children.map(child => ({
                  ...child,
                  checked: isChecked,
                }))
              : node.children,
          }
        }
        if (node.children) {
          return {...node, children: updateNodes(node.children)}
        }
        return node
      })

    setData(prev => updateNodes(prev))
  }

  return (
    <div className="tree-container">
      <h2>Checkbox Tree</h2>
      <ul className="root-list">
        {data.map(node => (
          <TreeNode key={node.id} node={node} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  )
}
