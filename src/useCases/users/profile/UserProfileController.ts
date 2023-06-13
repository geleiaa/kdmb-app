import { controller, httpGet, requestHeaders, requestParam, response } from "inversify-express-utils";
import { UserProfileService } from "./UserProfileService";
import { IUserProfile } from "./IUserProfileDTO";
import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";

@controller("/users")
class UserProfileController {
    constructor(private profileService: UserProfileService) { }

    @httpGet("/me", AuthMiddleware)
    async execute(@requestHeaders("decoded") req: any, @response() res: any): Promise<IUserProfile> {

        const id = req.sub

        const user = await this.profileService.execute(id);

        return res.send(user);
    }
}

export { UserProfileController };