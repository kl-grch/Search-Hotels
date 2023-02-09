import './filterButton.scss';
import arrowUp from '../../assets/filterButton/arrowUp.svg';
import arrowDown from '../../assets/filterButton/arrowDown.svg'


export default function FilterButton(props) {
    return (
        <button className="filter">
            <div className="filter__title">{props.title}</div>
            <div className="filter__arrows">
                <div className="filter__arrows-up">
                    <img src={arrowUp} alt="arrow-up" />
                </div>
                <div className="filter__arrows-down">
                    <img src={arrowDown} alt="arrow-down" />
                </div>
            </div>
        </button>
    )
}