import { FC, memo } from "react";

export const Schedule: FC = memo(() => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="text-6xl">[bot-i]</div>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a href="./Profile">
              <img
              className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="あいこん画像"
              />
              </a>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">DateTime</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Title</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Location</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Osusume</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">2022-11-11 11:11 ~ 22:22</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">大学の授業</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">神戸市灘区六甲台町</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-300 px-4 py-2 text-base font-medium text-slate-500 shadow-sm hover:bg-orange-400">
                  おすすめを見る
                </a>
              </td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">2022-11-12 9:30 ~ 20:00</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">レコチョクハッカソンDay1</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">東京都渋谷区渋谷2丁目</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-300 px-4 py-2 text-base font-medium text-slate-500 shadow-sm hover:bg-orange-400">
                  おすすめを見る
                </a>
              </td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">2022-11-13 9:30 ~ 20:00</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">レコチョクハッカソンDay2</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">東京都渋谷区渋谷2丁目</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-300 px-4 py-2 text-base font-medium text-slate-500 shadow-sm hover:bg-orange-400">
                  おすすめを見る
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
  );
});
