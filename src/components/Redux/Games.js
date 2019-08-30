import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { lastYearSnaps, gameData } from '../../redux/actions/postActions'
// import snapCounts from '../csv/2018SnapCounts'
// import gameSummary from '../csv/2019GameSummary'
// import teamSummary from '../csv/2019TeamSummary'

class Games extends Component {
    componentDidMount() {
        // console.log(this.props.football.gameData)
        console.log(this.props)
    }
    render() {
        return(
            <div>
                <h1>Games</h1>
                {/* {this.props.gameInfo[0].Home} */}
            </div>
        )
    }
}



Games.propTypes = {
    
   
    gameSummary: PropTypes.array,
    
}

const mapStateToProps = state => ({
   
    
    gameSummary: state.football.gameData
})
export default connect(mapStateToProps, {  })(Games)


