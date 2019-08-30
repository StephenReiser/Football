import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { lastYearSnaps, gameData } from '../../redux/actions/postActions'
import snapCounts from '../../csv/2018SnapCounts'
import gameSummary from '../../csv/2019GameSummary'
import teamSummary from '../../csv/2019TeamSummary'
import Games from './Games'

class SnapCounts extends Component {
    componentDidMount() {
        this.props.lastYearSnaps(snapCounts, teamSummary)
        this.props.gameData(gameSummary)
        console.log(teamSummary)
        
    //    console.log(this.props)
       }
    render() {

        // Need a function to update state

        let playerDataStuff = this.props.lyCustomizedSnaps
        let gameInfoStuff = this.props.gameInfo

        // playerDataStuff = {}
        return(
            <div>
                <Games gameInfo = {ownProps.gameInfoProps}/>
                <h1>SnapCounts</h1>
                {gameInfoStuff.map(team => {
                    return(
                        <li>{team.Home}</li>
                    )
                })}
                <table>
                    <tbody>
                        <tr>
                                <td>Player</td>
                                {/* <td>Wk 1</td>
                                <td>Wk 2</td>
                                <td>Wk 3</td>
                                <td>Wk 4</td>
                                <td>Wk 5</td>
                                <td>Wk 6</td>
                                <td>Wk 7</td>
                                <td>Wk 8</td>
                                <td>Wk 9</td>
                                <td>Wk 10</td>
                                <td>Wk 11</td>
                                <td>Wk 12</td>
                                <td>Wk 13</td>
                                <td>Wk 14</td>
                                <td>Wk 15</td>
                                <td>Wk 16</td>
                                <td>Wk 17</td> */}
                                <td>Games > 20 Snaps</td>
                                <td>Counting Snaps</td>
                                <td>Avg Snaps/Game 2018</td>
                                <td>Snap Perc</td>
                                <td>Rush % of Snap</td>
                                <td>Target % of Snap</td>
                                {/* <td>Expected Target</td>
                                <td>Expected Rush</td> */}
                                <td>Team Score</td>
                                <td>Team Snaps</td>
                                <td>Projected Snaps</td>
                                <td>Projected Target</td>
                                <td>Projected Rush</td>


                            </tr>
                            {playerDataStuff.map(player => {
                                return(
                                    <tr key={player['Player']}>
                                        <td>{player['Player']}</td>
                                        {/* <td>{player['1']}</td>
                                        <td>{player['2']}</td>
                                        <td>{player['3']}</td>
                                        <td>{player['4']}</td>
                                        <td>{player['5']}</td>
                                        <td>{player['6']}</td>
                                        <td>{player['7']}</td>
                                        <td>{player['8']}</td>
                                        <td>{player['9']}</td>
                                        <td>{player['10']}</td>
                                        <td>{player['11']}</td>
                                        <td>{player['12']}</td>
                                        <td>{player['13']}</td>
                                        <td>{player['14']}</td>
                                        <td>{player['15']}</td>
                                        <td>{player['16']}</td>
                                        <td>{player['17']}</td> */}

                                        {/* need team and position plus filters, but would want that coming from 2019 data */}
                                        <td>{player['LYSNAPS'].length}</td>
                                        <td>{player['LYCountingSnaps']}</td>
                                        <td>{(player['LYCountingSnaps'] / player['LYSNAPS'].length ).toFixed(1)}</td>
                                        <td>{player['SnapPercent']}</td>
                                        <td>{player['RushPercent']}</td>
                                        <td>{player['TgtPercent']}</td>
                                        {/* <td>{(player['LYCountingSnaps'] / player['LYSNAPS'].length * (player['TgtPercent'] / 100)).toFixed(1)}</td>
                                        <td>{(player['LYCountingSnaps'] / player['LYSNAPS'].length * ( player['RushPercent'] /100)).toFixed(1)}</td> */}
                                        <td>{player.teamScore}</td>
                                        <td>{player.teamSnaps}</td>
                                        <td>{(player.teamSnaps * player.SnapPercent / 100).toFixed(1)}</td>
                                        <td>{(player.teamSnaps * player.SnapPercent / 100 * player.TgtPercent / 100 ).toFixed(1)}</td>
                                        <td>{(player.teamSnaps * player.SnapPercent / 100 * player.RushPercent / 100 ).toFixed(1)}</td>

{/* slight discount in snap counts to account for kneel downs  */}
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
        )
    }
}

SnapCounts.propTypes = {
    
    lyCustomizedSnaps: PropTypes.array,
    lastYearSnaps: PropTypes.func.isRequired,
    gameInfo: PropTypes.array,
    gameData: PropTypes.func.isRequired,
    teamSummary: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
   
    lyCustomizedSnaps: state.football.lyCustomizedSnaps,
    gameInfo: state.football.gameInfo,
    gameInfoProps: ownProps.gameInfo
})
export default connect(mapStateToProps, { lastYearSnaps, gameData })(SnapCounts)

