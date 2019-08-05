import React from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends React.Component {
    
    state = {
        selected: null
    }

    displayBooks = () => {
        let data = this.props.data;
        if(data.loading) {
            return <div>Loading Books...</div>
        }
            return data.books.map(book => {
                return (
                    <li key = {book.id} onClick = {(e) => {this.setState({selected: book.id})}}>{book.name}</li>
                )
            })
    }
    
    render(){
        return (
            <div>
                <ul id = "book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId = {this.state.selected}/>
            </div>
          );
    }
}

export default graphql(getBooksQuery)(BookList);
