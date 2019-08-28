import React from 'react'

export function Contact() {
    return (
        <div class="container-fluid section2-cont">
            <div class="row d-flex justify-content-center">
                <div class="col-md-8 mt-5 ml-5 bg-light rounded">
                    <h1 class="text-center font-weight-bold text-primary">Contact Us</h1>
                    <hr class="bg-light" />
                    <h5 class="text-center text-success"></h5>
                    <form action="" method="post" id="form-box" class="p-2">
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="name" class="form-control" placeholder="Enter your name" required />
                        </div>
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                            </div>
                            <input type="email" name="email" class="form-control" placeholder="Enter your email" required />
                        </div>
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-at"></i></span>
                            </div>
                            <input type="text" name="subject" class="form-control" placeholder="Enter subject" required />
                        </div>
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-comment-alt"></i></span>
                            </div>
                            <textarea name="msg" id="msg" class="form-control" placeholder="Write your message" cols="30" rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit" class="btn btn-primary btn-block" value="Send" />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )

}
export default Contact;