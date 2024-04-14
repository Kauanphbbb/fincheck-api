import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { TransactionType } from '../entities/transaction';

@Injectable()
export class ValidateTransactionAndCategoryType {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async validate(transactionType: TransactionType, categoryId: string) {
    const category = await this.categoriesRepo.findFirst({
      where: {
        id: categoryId,
      },
    });

    if (!category || category.type !== transactionType) {
      throw new BadRequestException(
        'This category is not valid for this transaction',
      );
    }
  }
}
