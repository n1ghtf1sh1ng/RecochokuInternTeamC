import { FC, memo } from "react";

export const Profile: FC = memo(() => {
  return (
    <div>
      <ul>
        <div>
          <div className="py-8 h-full">
            <div className="container mx-auto my-4">
              <h1 className="text-center text-4xl font-bold my-4">
                プロフィール
              </h1>
              <form
                action="#"
                acceptCharset="UTF-8"
                method="post"
                className="px-60 mt-16"
              >
                <div className="mb-6">
                  <div className="flex my-2">
                    <label className="text-xl font-bold mr-6 w-48">名前</label>
                    <input
                      type="text"
                      className="p-2 pl-6 rounded w-full border-black border-2"
                      readOnly={true}
                      value={"Nakashima Yuta"}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex my-2">
                    <label className="text-xl font-bold mr-6 w-48">
                      メールアドレス
                    </label>
                    <input
                      type="text"
                      className="p-2 pl-6 rounded w-full border-black border-2"
                      readOnly={true}
                      value={"n0904yBUNJOU@gmail.com"}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex my-2">
                    <label className="text-xl font-bold mr-6 w-48">
                      カテゴリ
                    </label>
                    <select
                      name=""
                      id=""
                      size={1}
                      className="p-2 pl-4 rounded border-black border-2 w-full"
                    >
                      <option value="">1000円未満</option>
                      <option value="">1000円以上2000円未満</option>
                      <option value="">2000円以上3000円未満</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
});
