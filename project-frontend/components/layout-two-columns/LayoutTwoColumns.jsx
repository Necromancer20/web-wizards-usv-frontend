import './LayoutTwoColumns.css';

const LayoutTwoColumns = ({leftColumn,rightColumn}) => (
  <div className="two-column-layout">
    <div className="left-column">
        {leftColumn}
    </div>

    <div className="right-column">
        {rightColumn}
    </div>
  </div>
);

export default LayoutTwoColumns;
