import PropTypes from 'prop-types';

export default function Toolbar(props) {

    return (
      <ul className={"list list-menu list-menu-mb"}>
        {
          props.props.filters.map((filter) => {
            let filterClass = "list-item-menu";

            if (filter === props.props.selected) {
              filterClass = "list-item-menu list-item-active";
            }

            return <li className={filterClass} onClick={evt => {
              const active = document.querySelector('.list-item-active');

              if (active) {
                active.className = 'list-item-menu';
              }

              evt.target.className = 'list-item-menu list-item-active';
              props.props.onSelectFilter(filter)
            }} key={filter}>{filter}</li>
          })
        }
      </ul>
    );
}

Toolbar.propTypes = {
  props: PropTypes.shape({
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func.isRequired
  })
}

Toolbar.defaultProps = {
  props: PropTypes.shape({
    filters: [],
    selected: '',
    onSelectFilter: () => {}
  })
}
