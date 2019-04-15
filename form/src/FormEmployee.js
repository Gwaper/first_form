import React, { Component } from 'react'
import './FormEmployee.css'



class FormEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
    
        fetch(url, config)
        .then(res => res.json())
         .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Putain de chaleur ${res}!`);
            }
        }).catch(e => {
            console.error(e);
            alert('hahah vous n\'avez pas dit le mot magique ');
        });
    
    }

    

render() {
    return (
        <div className="FormEmployee">
            <h1>Titre de Film</h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="name">Titre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.url}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            type="comment"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
}

export default FormEmployee;