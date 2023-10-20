import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Post extends Component
{
    state = {
        posts: [],
        loading: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/posts');
        // console.log(res);

        if(res.data.status === 200)
        {
            this.setState({
                posts: res.data.posts,
                loading: false,
            });
        }
    }

    // deletePost = async (e, id) => {

    //     const thisClickedFunda = e.currentTarget;
    //     thisClickedFunda.innerText = "Deleting";

    //     const res = await axios.delete('http://127.0.0.1:8000/api/delete-post/${id}');

    //     if(res.data.status === 200)
    //     {
    //         thisClickedFunda.closest("tr").remove();
    //         console.log(res.data.message);
    //     }
    // }

    render() {

        var post_HTMLTABLE = "";
        if(this.state.loading)
        {
            post_HTMLTABLE = <tr><td colSpan="6"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            post_HTMLTABLE = 
            this.state.posts.map( (item)=> {
                return (
                    <tr key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.created_at}</td>
                        
                        {/* <td>
                            <button type='button' onClick={(e) => this.deletePost(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
                        </td> */}
                    </tr>
                );
            });
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Posts
                                <Link to={'addPost'} className='btn btn-primary btn-sm float-end'>Add New Post</Link>
                                </h4>
                            </div>
                            <div className='card-body'> 

                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                           <th>ID</th>
                                           <th>Title</th> 
                                           <th>Description</th>
                                           <th>created at</th>
                                           
                                           
                                           {/* <th>Delete</th> */}
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {post_HTMLTABLE}
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;