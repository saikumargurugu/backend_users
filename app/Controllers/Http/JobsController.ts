// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from "App/Models/Job";



export default class JobsController {

    public async store({ request }){
        const job= <Job> new Job()
        const orgReqData= request.originalRequestData
        job.jobTitle= orgReqData.jobTitle
        job.jobDescription= orgReqData.jobDescription
        job.contantNumber= orgReqData.contantNumber
        job.contanctEmail= orgReqData.contanctEmail
        job.location= orgReqData.location
        await job.save()
        return job
    }
    public async show ({ params }) {
        return await Job.findBy('id',params.id)
      }


    public async index () {
    return await Job.all()
    }

    public async destroy ({params}) {
        const job = <Job> await Job.findBy('id', params.id)
        if(job && Object.keys(Job).length >0){
            await job.delete()
            return {"message": "Job Removed"}
        }
        return {"message": "no Job found"}
    }
}
