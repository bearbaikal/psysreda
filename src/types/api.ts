export enum AxiosMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
}

export interface ApiRequestConfig {
  method: AxiosMethod;
  path: string;
  body: Record<string, unknown>;
}

export enum NotifyRecipientRole {
  SiteOwner = "site_owner",
  SiteAdmin = "site_admin",
}

export enum NotifyType {
  MessageFromVisitor = "message_from_visitor",
  QuizResult = "quiz_result",
}
