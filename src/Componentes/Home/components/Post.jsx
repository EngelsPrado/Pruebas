import React, { Fragment } from 'react'

const Post = (props) => {
    return (
        <Fragment>
            <div class="card gedf-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" src={props.userImage} alt=""/>
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@{props.userName}</div>
                                    <div class="h7 text-muted">{props.fullName}</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{props.timeShared}</div>
                        <a class="card-link" href="/">
                            <h5 class="card-title">{props.linkPrincipal}</h5>
                        </a>

                        <p class="card-text">
                            {props.content}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="/" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="/" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="/" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
        </Fragment>
            )
        }
        
        export default Post
