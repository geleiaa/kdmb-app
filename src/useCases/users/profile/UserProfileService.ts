import { UserRepository } from "@repositories/user/UserRepository";
import { IUserProfile } from "./IUserProfileDTO";
import { AppError, Report, StatusCode } from "@expressots/core";
import { provide } from "inversify-binding-decorators";

@provide(UserProfileService)
class UserProfileService {
    constructor(private userRepo: UserRepository) { }

    async execute({ id }: any): Promise<IUserProfile | undefined> {
        try {
            const user = await this.userRepo.findById(id);

            console.log('user =>', user);

            if (!user) {
                Report.Error(
                    new AppError(
                        StatusCode.NotFound,
                        "Usuário não encontrado",
                        "profile-service",
                    ),
                );
            }

            let resp = {
                id: user?.id as string,
                name: user?.name as string,
                email: user?.email as string
            }

            return resp;

        } catch (error) {
            Report.Error(
                new AppError(
                    StatusCode.NotFound,
                    "Algo de errado",
                    "profile-service",
                ),
            );
        }
    }
}

export { UserProfileService };