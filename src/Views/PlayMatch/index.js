import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Select from 'react-select';

function PlayMatch() {
    const [currScore, setCurrScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(0);
    const [overs, setOvers] = useState(0);
    const [isOverCompleted, setIsOverCompleted] = useState(false);
    const [currOver, setCurrOver] = useState([]);
    const [myTeamPlayers, setMyTeamPlayers] = useState([]);
    const [oppTeamPlayers, setOppTeamPlayers] = useState([]);
    const [remainingTeamPlayers,setRemainingTeamPlayers] = useState([]);
    const [batsman1, setBatsman1] = useState('');
    const [batsman2, setBatsman2] = useState('');
    const [displayBatsman1,setDisplayBatsman1] = useState('Select Batsman');
    const [displayBatsman2,setDisplayBatsman2] = useState('Select Batsman');
    // let myTeamPlayers = [];
    // let oppTeamPlayers = [];
    // let remainingTeamPlayers = [];
    // const [teamPlayers,setTeamPlayers] = useState({
    //     myTeamPlayers: [],
    //     oppTeamPlayers: [],
    //     remainingTeamPlayers: [],
    // })
    // console.log('vvvv',displayBatsman1.value);
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);
    console.log('my team name: ' + currMatchData.myTeam)
    useEffect(()=>{
        for (let team of teamsData) {
            if (currMatchData.myTeam === team.teamName) {
                console.log(team);
                setMyTeamPlayers(team.teamPlayers);
                console.log('myTeam...', myTeamPlayers);
            }
            if (currMatchData.oppTeam === team.teamName) {
                console.log(team)
                setOppTeamPlayers(team.teamPlayers)
            }
        }
    },[])
    
    console.log(myTeamPlayers,'kkkkk')

    if (isOverCompleted) {
        setTimeout(() => {
            alert('over completed...');
            setIsOverCompleted(false);
            setCurrOver([]);
        }, 200)
    }
    function handleScoreClick(e) {
        let btnValue = e.target.innerText;
        if (btnValue !== 'WB' && btnValue !== 'NB') {
            if ((overs * 10) % 10 === 5) {
                console.log('over completed...');
                setIsOverCompleted(true);
                setOvers(parseFloat((overs + 0.5).toFixed(1)))
            }
            else {
                setOvers(parseFloat((overs + 0.1).toFixed(1)))
            }
        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            console.log('wide ball')
            setCurrScore(currScore + 1)
            setDisplayScore(currScore)
            if (btnValue === 'WB') {
                setDisplayScore('Wide Ball')
                setCurrOver([...currOver, 'WB'])
            }
            else {
                setDisplayScore('No Ball')
                setCurrOver([...currOver, 'NB'])
            }
        }
        else if (btnValue === 'WC' || btnValue === 'DB') {
            console.log('Out');
            console.log(currScore);
            if (btnValue === 'WC') {
                setDisplayScore('OUT')
                setCurrOver([...currOver, 'WC'])
            }
            else {
                setDisplayScore('Dead Ball')
                setCurrOver([...currOver, 'DB'])
            }
        }
        else if (btnValue === 'Undo') {
            console.log('undo...');

        }
        else {
            // console.log(typeof currScore);
            // console.log(typeof btnValue);
            btnValue = +btnValue;
            setCurrScore(currScore + btnValue)
            setDisplayScore(currScore + btnValue)
            setCurrOver([...currOver, btnValue])
        }
    }
    const handleBatsman1 = (selectedBatsman) => {
        setBatsman1(selectedBatsman);
        console.log(selectedBatsman);
        setDisplayBatsman1(selectedBatsman);
        setRemainingTeamPlayers(myTeamPlayers.filter(player => player !== selectedBatsman));
    }
    const handleBatsman2 = (selectedBatsman) => {
        setBatsman2(selectedBatsman);
        // console.log(selectedBatsman);
        setDisplayBatsman2(selectedBatsman);
    }


    return (
        <div className='w-75'>
            <div className="container bg-secondary p-2">
                {/* <h2>match controls here</h2> */}
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around mb-4">
                    <div className="displayLeft">
                        <p>{(displayBatsman1.value)?displayBatsman1.value:'(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value)?displayBatsman2.value:'(Select Batsman 2)'}</p>
                        <p>Total Score: {currScore}</p>
                        <p>Overs: {overs}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        <h2>{displayScore}</h2>
                    </div>
                    <div className="displayRight">
                        <p>Bowler</p>
                        <p>Overs: {currOver.map(currBall => currBall + ' ')}</p>
                    </div>
                </div>
                <div className="controls d-flex justify-content-between">
                    <div className="batting w-25">
                        <label>Select Batsman 1</label>
                        <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                        <label>Select Batsman 2</label>
                        <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                    </div>
                    <div className="control-box text-center">
                        <div>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>0</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>1</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>2</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>3</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>4</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>6</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>NB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WC</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>DB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>Undo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayMatch
