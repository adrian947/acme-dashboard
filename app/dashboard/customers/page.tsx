import CustomersTable from '@/app/ui/customers/table';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function CustomersPage() {
  return (
    <Suspense fallback={<LatestInvoicesSkeleton />}>
      <CustomersTable />
    </Suspense>
  );
}
