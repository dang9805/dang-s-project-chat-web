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

            <p style="margin: 20px;">Đã có tài khoản : <a id="redirect-login">Đăng nhập</a></p>
            
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
                        <p style="margin: 20px;">Chưa tài khoảng : <a id="redirect-register">Đăng ký</a></p>
                </div>
            </form>
        </div>
    </div>
`

components.chatPage = `
<div id="chat-container">
<div id="user-box">
    <div id="chatPage-list-chat">
        <div class="create-conversation">
            <button class="btn cursor-pointer" id="create-conversation-btn">Tạo đoạn chat mới</button>
        </div>

        <div class="list-conversations">
            <div class="conversation">
                <div class="left-conversation-title">
                </div>
                <div class=num-of-user>
                </div>
            </div>

            <div class="conversation">
                <div class="left-conversation-title">
                </div>
                <div class=num-of-user>
                </div>
            </div>
        </div>
    </div>

    
    <div id="setting-box">
        <div id="login-register-btn-box">
            <button id="login-btn" class="login-register-btn">Đăng nhập tài khoản khác</button>
            <button id="register-btn" class="login-register-btn">Đăng xuất</button>
        </div>
    </div>
</div>

<div id="chat-box">
    <div class="conversation-title">
    </div>

    <div class="list-messages">

    </div>

    <form id="send-message-form">
        <input type="text" placeholder="Nhập tin nhắn" name="message">
        <button id="send-message-btn">Gửi</button>
    </form>
</div>

<div class="aside-right">
            <div id="aside-right-title">
                <h2 style="padding-left: 10px">Thành viên</h2>
            </div>
            <div class="list-users" style="padding-left: 5px;">
            </div>
            <form id = "add-user-form">
                <div class="input-wrapper">
                    <input type="text" placeholder="Email bạn bè" name="email">
                    <div class="error" id="add-user-email-error"></div>
                </div>
                <button class="btn" type="submit">Lưu</button>
            </form>
        </div>

</div>
`

components.createConversationScreen = `
<div class="create-conversation-container">
<form class="create-conversation-form">
    <div id="create-conversation-title">
        <h4>Thêm 1 cuộc trò chuyện mới</h4>
    </div>
    <div class="input-wrapper">
        <input type="text" name="title" placeholder="Tên đoạn chat">
        <div id="conversation-title-error" class="err"></div>
    </div>


    <div class="input-wrapper">
        <input type="text" name="email" placeholder="Email bạn bè">
        <div id="conversation-email-error" class="err"></div>
    </div>

    <div class="black-small-line"></div>

    <div class="action">
        <button style="margin-right: 50px;" type="click">Lưu</button>
        <button id="return-chat" style="margin-left: 50px;">Hủy</button>
    </div>
</form>

</div>
`