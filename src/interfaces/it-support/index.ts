import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ItSupportInterface {
  id?: string;
  user_id: string;
  issue_description: string;
  status: string;
  priority?: string;
  resolved_at?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ItSupportGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  issue_description?: string;
  status?: string;
  priority?: string;
}
