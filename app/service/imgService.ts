import { imgModel } from "../model/Image";

const date = new Date()
const dateNow = date.toLocaleDateString()

const save = async (description: string, path: any ) => {
    if(description == ''){
        return 401;
    } else {
        const data = new imgModel({
            description,
            path,
            create_in: dateNow
        })

        const response = await data.save()
        if(response){
            return 200;
        }
    }

}

export { save }