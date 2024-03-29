export const env = "https://turbo-doodle-9qjpg6ww4r5fprxr-8000.app.github.dev";
export const apiEnv = env + "/api/v1";

export const userApiEnv = apiEnv + "/users";
export const roomApiEnv = apiEnv + "/rooms";

export const RegisterUserAPI = userApiEnv + "/register";
export const LoginUserAPI = userApiEnv + "/login";
export const LogoutUserAPI = userApiEnv + "/logout";
export const RefreshTokenAPI = userApiEnv + "/refreshToken";

export const CreateRoomAPI = roomApiEnv + "/createRoom";
export const AddUsersInRoomAPI = roomApiEnv + "/addUsersInRoom";
export const RemoveUserInRoomAPI = roomApiEnv + "/removeUserInRoom";
export const PersonAllowedInRoomDetailsAPI = roomApiEnv + "/personsAllowedInRoom";
export const isPersonAllowedInRoomAPI = roomApiEnv + "/isPersonAllowed";