import { RegisterForm } from '@/components/register-form';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}