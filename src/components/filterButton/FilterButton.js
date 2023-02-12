import './filterButton.scss';
import { useSelector } from 'react-redux';



export default function FilterButton(props) {

    const {favoriteHotels} = useSelector(state => state.favoriteHotels);

    return (
        <button 
        className={props.filterActiveBorder}
        onClick={props.onClick}
        >
            <div className={props.filterActiveTitle}>{props.title}</div>
            <div className="filter__arrows">
                <div className={props.filterActiveArrowUp}>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z" fill="rgba(0, 0, 0, 0.32)"/>
                    </svg>
                </div>
                <div className="filter__arrows-down ">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="rgba(0, 0, 0, 0.32)"/>
                    </svg>
                </div>
            </div>
        </button>

        // <button 
        // className={favoriteHotels?.length > 0 ? filterActive : 'filter'}
        // onClick={props.onClick}
        // >
        //     <div className={favoriteHotels?.length > 0 ? filterActiveTitle : 'filter__title'}>{props.title}</div>
        //     <div className="filter__arrows">
        //         <div className={favoriteHotels?.length > 0 ? filterActiveArrowUp : 'filter__arrows-up'}>
        //             <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z" fill="rgba(0, 0, 0, 0.32)"/>
        //             </svg>
        //         </div>
        //         <div className="filter__arrows-down ">
        //             <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="rgba(0, 0, 0, 0.32)"/>
        //             </svg>
        //         </div>
        //     </div>
        // </button>
    )
}