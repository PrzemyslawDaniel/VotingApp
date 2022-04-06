import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice(
    {
        name: 'people',
        initialState: {
            Voters: [{
                Name: "Peppa",
                HasVoted: true,
            },
            {
                Name: "Rumcajs",
                HasVoted: false,
            }],
            Candidates: [{
                Name: "Johnny Bravo",
                Votes: 2,
            },
            {
                Name: "Pluto",
                Votes: 5,
            }]
        },

        reducers: {

            //reducer to add new Voter to the list of peoples, throwing alert if Name is already on list
            addVoter: (state) => {
                const NewName = prompt("What is new Voter name")
                const findIfUnique = state.Voters.findIndex((value) => { return value.Name === NewName })
                if (findIfUnique > 0) { alert(`Name ${NewName} is on the list. Can't add new.`); }
                else {
                    state.Voters.push({
                        Name: NewName,
                        HasVoted: false,
                    })
                }
            },
            //reducer to add new Candidate to the list of peoples, throwing alert if Name is already on list
            addCandidate: (state) => {
                const NewName = prompt("What is new Candidate name")
                const findIfUnique = state.Candidates.findIndex((value) => { return value.Name === NewName })
                if (findIfUnique > 0) { alert(`Name ${NewName} is on the list. Can't add new.`); }
                else {
                    state.Candidates.push({
                        Name: NewName,
                        Votes: 0,
                    })
                }
            },
            //reducer for voting, colect 2 inputs and updates coresponding Voter and Candidate filed
            performVote(state, action) {

                const { input1, input2 } = action.payload
                if (input1 != "" && input2 != "") {
                    state.Voters.map((value) => { return value.HasVoted = value.Name === input1 ? true:value.HasVoted })
                    state.Candidates.map((value) => { return value.Votes += value.Name === input2 ? 1 : 0 })
                }
                else {
                    alert("You have to provide Voter and Candidate to perform this action")
                }
            }


        }



    }
)

export const { addVoter, addCandidate, performVote } = peopleSlice.actions
export default peopleSlice.reducer

