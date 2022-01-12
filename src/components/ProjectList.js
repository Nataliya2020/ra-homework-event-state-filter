import PropTypes from "prop-types";

export default function ProjectList(props) {

  return (
    <ul className={"list list-menu-count"}>
      {props.props.map((card, index) => {

        return (
          <li className={"list-item-card"} key={index.toString()}>
              <img className={"product-img"}
                   src={card.img}
                   alt={card.category}
              />
          </li>
        )
      })}
    </ul>
  );
}

ProjectList.propTypes = {
  props: PropTypes.array.isRequired
}

ProjectList.defaultProps = {
  props: []
}
