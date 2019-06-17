import React, { Component } from 'react';

class Entree extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchEntrees();
    }

    fetchEntrees() {
        fetch(`http://localhost:8080/entrees`)
            .then(res => res.json())
            .then(result => this.setState({
                entrees: result.entrees,
                isLoading: false
            }));
    }

    render() {
        const { isLoading, entrees } = this.state;
        return (
            <div className="entrees">
                <h1>Entrees</h1>
                <hr />
                <ul>
                    {!isLoading ? (
                        entrees.map(item => {
                            const { entreeId, entree, description } = item;
                            return (
                                <div key={entreeId}>
                                    <h3>{entree}</h3>
                                    <p>{description}</p>
                                </div>
                            );
                        })
                    ) : (
                            <p>Loading...</p>
                        )}
                </ul>
            </div>
        )
    }
}

export default Entree;