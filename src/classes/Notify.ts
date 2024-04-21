import { apiRequest } from "@/api/apiRequest";
import { apiRoutes } from "@/settings/apiRoutes";
import { AxiosMethod, NotifyRecipientRole, NotifyType } from "@/types/api";

export class Notify {
  static async now(recipientRole: NotifyRecipientRole, notifyType: NotifyType, message: string) {
    await apiRequest({
      method: AxiosMethod.Post,
      path: apiRoutes.notify,
      body: {
        token: import.meta.env.VITE_APP_SITE_TOKEN,
        sourceId: import.meta.env.VITE_APP_NOTIFY_SOURCE_ID,
        recipientRole,
        notifyType,
        message,
      },
    });
  }
}
