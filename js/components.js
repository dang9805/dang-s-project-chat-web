const components = {}
components.welcomePage = '<h3>Hello World</h3>'

components.registerPage = `
<div id="register-main-box">
<div id="register-form-box">
    <div id="register-name-page-box">
        <h2>Đăng web chat</h2>
    </div>
    <form id="register-information-box">
        <div class="register-form">
            <input type="email" placeholder="Email" name="email">
            <div id="email-error" class="err"></div>
        </div>
        
        <div class="black-small-line"></div>
        
        <div class="register-form">
            <input type="text" placeholder="Tên đăng nhập" name="username">
            <div id="username-error" class="err"></div>
        </div>
        
        <div class="black-small-line"></div>
        
        <div class="register-form">
            <input type="password" placeholder="Mật khẩu" name="password">
            <div id="password-error" class="err"></div>
        </div>

        <div class="black-small-line"></div>

        <div class="register-form">
            <input type="password" placeholder="Xác nhận mật khẩu" name="confirmPassword">
            <div id="confirm-password-error" class="err"></div>
        </div>

            <div class="black-small-line"></div>

        <div class="register-form">
            <button id="register-btn" type="submit">Đăng ký</button>

            <p style="margin: 20px;">Chưa có tài khoảng <a id="redirect-login">Đăng ký</a></p>
            
        </div>      
    </form>
</div>  
</div>
`

components.loginPage = `
    <div id="login-main-box">
        <div id="login-form-box">
            <div id="login-name-page-box">
                <h2>Đăng web chat</h2>
            </div>
            <form id="login-information-box">
                <div class="login-form">
                    <input type="email" name="email" placeholder="Email">
                    <div id="email-error" class="err"></div>
                </div>
                
                <div class="black-small-line"></div>
                
                <div class="login-form">
                    <input type="password" name="password" placeholder="Mật khẩu">
                    <div id="password-error" class="err"></div>
                </div>

                <div class="black-small-line"></div>

                <div class="login-form">
                    <button id="login-btn" type="submit" >Đăng nhập</button>
                        <p style="margin: 20px;">Có tài khoảng rồi: <a id="redirect-register">Đăng nhập</a></p>
            </div>
        </form>
    </div>
`

components.chatPage = `
    // copy tất cả hết mục html body của body (temp3.html)
    <div id="chat-container">
        <div id="user-box">
            <p>hello world</p>
        </div>
        <div id="chat-box">
            <div id="conversation-detail">
                <p>TÊN NGƯỜI CHAT ĐIỀN VÀO ĐÂYYYYYYYYYYYYYYY</p>
            </div>

            <div id="list-message">
                
            </div>

            <form id="send-message-form">
                <input type="text" placeholder="Nhập tin nhắn" name="message">
                <button id="send-message-btn">Gửi</button>
            </form>
        </div>
    </div>
`