import {Link} from "react-router-dom";

const ActivationSuccess = () => {
    return (
        <div className={'auth-background'}>
            <div className={'login-container'}>
                <div className={'profile-card'} style={{textAlign: 'center'}}>
                    <h1>Спасибо за активацию!</h1>
                    <p style={{fontSize: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequuntur eveniet, illum itaque laboriosam laborum maiores, minus nemo quam quia reiciendis rem repudiandae sed tempora tempore totam? Maiores, temporibus!</p>
                    <Link to={'/'} >
                         На главную страницу
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ActivationSuccess
