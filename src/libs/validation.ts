import { validate, ValidationError } from 'class-validator';

export class Validation {
   static async parameters(instance: object, params: Record<string, unknown>) {
      const errors: ValidationError[] = await validate(instance, params);
      return errors.length > 0 ? errors[0].constraints : null;
   }
}
