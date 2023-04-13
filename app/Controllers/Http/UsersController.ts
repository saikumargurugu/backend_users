// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import User from "App/Models/User";



export default class UsersController {

    public async store({ request }){
        const user= <User> new User()
        const orgReqData= request.originalRequestData
        user.firstName= orgReqData.firstName
        user.lastName= orgReqData.lastName
        user.age= orgReqData.age
        user.email= orgReqData.email
        user.phoneNumber= orgReqData.phoneNumber
        user.isAdmin= orgReqData.isAdmin
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
