module.exports = class UserDto {
    E_mail;
    UsersID;
    Activated;
    User_name;
    Admin;
    Password;
    Activation_Link;

    constructor(model) {
        this.E_mail = model.E_mail;
        this.UsersID = model.UsersID;
        this.Activated = model.Activated;
        this.User_name = model.User_name;
        this.Admin = model.Admin;
        this.Password = model.Password;
        this.Activation_Link = model.Activation_Link;
    }
}
