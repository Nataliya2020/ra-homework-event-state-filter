import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';

export default class Portfolio extends React.Component {
  item = this.props.item;

  state = {selected: this.item.selected};

  render() {

    return (
      <>
      <Toolbar props={
        {
          filters: this.item.filters,
          selected: this.state.selected,
          onSelectFilter: (filter) => {
            this.setState({selected: filter})
          }
        }
      }/>

      <ProjectList
        props={this.state.selected === 'All' ? this.item.projects : this.item.projects.filter(project => project.category === this.state.selected)}/>
    </>
    )
  };

}

Portfolio.propTypes = {
  item: PropTypes.shape({
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string,
    projects: PropTypes.array.isRequired
  })
}

Portfolio.defaultProps = {
  item: PropTypes.shape({
      filters: [],
      selected: '',
      projects: []
    }
  )
}

