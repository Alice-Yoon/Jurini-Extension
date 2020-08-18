// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleDetails } from '../modules/details';

// import App from '../App';
// import CompanyDetails from '../components/pages/CompanyDetails/CompanyDetails';


// const DetailsContainer = () => {
//     const isShow = useSelector(state => state.details.isShow);
//     const dispatch = useDispatch();
//     const onToggle = useCallback(() => dispatch(toggleDetails()), [dispatch]);
//     return (
//         <>
//             <App isShow={isShow} />
//             <CompanyDetails 
//                 isShow={isShow} 
//                 onToggle={onToggle} 
//             />
//         </>
//     )
// }

// export default DetailsContainer;