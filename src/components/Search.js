import React from 'react';

export default class Search extends React.Component {
    // constructor(props) {
    //     super(props);
    // } 
    state = {
        search: ''
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        // callback from parent
        this.props.onSearch(this.state.search);
    };
    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label htmlFor=''> Video Search</label>
                        <input
                            value={this.state.search}
                            type='text'
                            onChange={(e) => this.setState({ search: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
