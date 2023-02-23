function TodoRoWItem(props) {
  const rowNumber = props.rowNumber;
  const rowDescription = props.rowDescription;
  const rowAssign = props.rowAssign;

  return (
    <tr
      onClick={() => {
        props.deleteTodo(props.rowNumber);
      }}
    >
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssign}</td>
    </tr>
  );
}

export default TodoRoWItem;
