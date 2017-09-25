import React from 'react'
import { connect } from 'react-redux'

import Main from '../components/Main'
import { main } from '../reducers'


// Drawer needs to know what to render: app info or input form 
const mapStateToProps = ({ main }) => ({
    main
});

// allows Drawer to change which of two components above is rendered (updates store)
const mapDispatchToProps = dispatch => ({
    mainFunc: (main) => {
        dispatch(main(main));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);