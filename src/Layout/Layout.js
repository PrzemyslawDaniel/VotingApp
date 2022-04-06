
import "./Layout.scss"
import React, { Component } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addVoter, addCandidate, performVote } from "../Redux/Slices";


//main react class to hold all components
export class TableLayout extends Component {
    render() {
        return (
            <div>
                <h1>Voting app</h1>
                <div className="TableLayout">
                    <TableVoters />
                    <TableCandidates />
                </div>
                <PlaceVote />
            </div>
        )
    }
}

//table for Voters
function TableVoters() {
    const people = useSelector((state) => state.people)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="TableTitle">
                Voters
                <button onClick={() => dispatch(addVoter())} className="TableButton"></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Has voted</th>
                    </tr>
                </thead>
                <tbody>
                    {people.Voters.map((value) => { return <tr key={value.Name}><td>{value.Name}</td><td style={{ color: value.HasVoted ? "green" : "red" }}>{value.HasVoted ? "V" : "X"}</td></tr> })}
                </tbody>
            </table>


        </div>
    )
}

//table for Candidates
function TableCandidates() {
    const people = useSelector((state) => state.people)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="TableTitle">
                Candidates
                <button onClick={() => dispatch(addCandidate())} className="TableButton"></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {people.Candidates.map((value) => { return <tr key={value.Name}><td>{value.Name}</td><td style={{ color: value.Votes > 0 ? "green" : "red" }}>{value.Votes}</td></tr> })}
                </tbody>
            </table>


        </div>
    )
}


//form for placing vote
function PlaceVote() {
    const people = useSelector((state) => state.people)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>Vote!</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                const payload = { input1: e.target[0].value, input2: e.target[1].value }
                dispatch(performVote(payload))
            }}>
                <input autoComplete="off" id="selectedVoter" list="Voters" placeholder="I am" />
                <datalist id="Voters" >
                    {people.Voters.map((value) => { return <option key={value.Name} value={value.Name} /> })}
                </datalist>
                <input autoComplete="off" id="selectedCandidate" list="Candidates" placeholder="I vote for" />
                <datalist id="Candidates" >
                    {people.Candidates.map((value) => { return <option key={value.Name} value={value.Name} /> })}
                </datalist>
                <input type="submit" value="Submit!" />
            </form>
        </div>
    )


}
