import { FETCH_POSTS, NEW_POST, TEST_FUNCTION, LAST_YEAR_SNAPS, GAME_SUMMARY } from './types'





// 

export const fetchPosts = () => dispatch => {
        console.log('fetching')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
        )
    }

    export const createPost = (postData) => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: postData
        }))
    }

  
    export const testingFunctions = () => dispatch => {
        dispatch({
            type: TEST_FUNCTION
        })
        console.log('hello')
    }

    
    
    export const lastYearSnaps = (snapData, gameFile) => dispatch => {
        console.log(snapData)
       
        // at this point could give team projected TD/rush td here as well - allowing us to calculate the rest
        

        snapData.forEach(player => {
            function search(nameKey, gameFile){
                for (var i=0; i < gameFile.length; i++) {
                    if (gameFile[i].Team === nameKey) {
                        player.teamSnaps = Number(gameFile[i].Snaps).toFixed(2);
                        player.teamScore = Number(gameFile[i].Score).toFixed(2);
                        player.passEff = Number(gameFile[i].PassEff).toFixed(2);
                        player.rushEff = Number(gameFile[i].RushEff).toFixed(2);
                        player.teamRushTd = (Number(gameFile[i].Score) * Number(gameFile[i].RushTdPerc)).toFixed(2);
                        player.teamPassTd = (Number(gameFile[i].Score) * Number(gameFile[i].PassTdPerc)).toFixed(2);

                    }
                }
            }
            player.LYSNAPS = []
            player.LYCountingSnaps = 0
            // player.teamSnaps = 0
            // player.teamScore = 0
            for (let i = 1; i < 18; i++) {
                if (player[i] > 20) {
                player.LYSNAPS.push(parseInt(player[i]))
                player.LYCountingSnaps = player.LYCountingSnaps + parseInt(player[i])
                }
            }
            search(player.Team, gameFile)
            // console.log(player[`LYSNAPS`])
        })
        dispatch({
            type: LAST_YEAR_SNAPS,
            payload: snapData
        })
    }

    export const gameData = (gameFile) => dispatch => {
        dispatch({
            type: GAME_SUMMARY,
            payload: gameFile
        })
    }