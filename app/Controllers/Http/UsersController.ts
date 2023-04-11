// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import User from "App/Models/User";



export default class UsersController {

    public async store(){
        const user= <User> new User()
        user.firstName= 'Children'
        user.lastName= 'http'
        user.age= 24
        user.email= 'sai@gmail.com'
        user.phoneNumber= '+917307472619'
        user.isAdmin= true
        await user.save()
        return user
    }
    public async show ({ params }) {
        return await User.findBy('id',params.id)
      }


    public async index () {
    return await User.all()
    }

    public async destroy ({params}) {
        const user = <User> await User.findBy('id', params.id)
        if(user && Object.keys(user).length >0){
            await user.delete()
            return {"message": "User Removed"}
        }
        return {"message": "no user found"}
    }
}
