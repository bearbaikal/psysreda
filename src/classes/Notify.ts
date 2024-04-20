import { apiRequest } from "@/api/apiRequest";
import { apiRoutes } from "@/settings/apiRoutes";
import { AxiosMethod, NotifyRecipientRole, NotifyType } from "@/types/api";

export class Notify {
  static async now(recipientRole: NotifyRecipientRole, notifyType: NotifyType, body: string) {
    await apiRequest({
      method: AxiosMethod.Post,
      path: apiRoutes.notify,
      body: {
        recipientRole,
        body,
      },
    });
  }
}
