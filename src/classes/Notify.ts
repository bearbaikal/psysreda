import { apiRequest } from "@/api/apiRequest";
import { apiRoutes } from "@/settings/apiRoutes";
import { AxiosMethod, NotifyType } from "@/types/api";

export class Notify {
  static async now(notifyType: NotifyType, message: string): Promise<{ success: boolean }> {
    return await apiRequest({
      method: AxiosMethod.Post,
      path: apiRoutes.notify,
      body: {
        token: import.meta.env.VITE_APP_PUBLIC_NOTIFICATION_TOKEN,
        notifyType,
        message,
      },
    });
  }
}
