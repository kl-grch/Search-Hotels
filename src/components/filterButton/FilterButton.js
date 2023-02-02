import './filterButton.scss';
import arrowDown from '../../assets/filterButton/arrowDown.svg';

export default function FilterButton(props) {
    return (
        <div className="filter">
            <button className="filter__button">{props.name}
            <div className="filter__arrows">
                <span className="filter__arrows-up">
                    <img src={arrowDown} alt="arrow" />
                </span>
                {/* <span className="filter__arrows-down">
                    <img src={arrowDown} alt="arrow" />
                </span> */}
            </div>
            </button>
        </div>
    )
}