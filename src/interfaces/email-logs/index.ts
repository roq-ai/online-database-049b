import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmailLogsInterface {
  id?: string;
  user_id: string;
  email_subject: string;
  email_body: string;
  sent_at?: any;
  status: string;
  recipient_email: string;
  sender_email: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmailLogsGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  email_subject?: string;
  email_body?: string;
  status?: string;
  recipient_email?: string;
  sender_email?: string;
}
