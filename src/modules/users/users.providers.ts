import { PasswordReset } from './password-reset.model';
import { User } from './models/user.model';
import { UserSecurityQuestion } from './models/user-security-question.model';
import { SupportMessage } from './models/support-messages.model';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'PASSWORD_RESET_REPOSITORY',
    useValue: PasswordReset,
  },
  {
    provide: 'USER_SECURITY_QUESTION_REPOSITORY',
    useValue: UserSecurityQuestion,
  },
  {
    provide: 'SUPPORT_MESSAGE_REPOSITORY',
    useValue: SupportMessage,
  },
];
