<template>
<div>
    <Header/>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg ">
    <div class="flex flex-col text-center w-full mb-10 mt-10">
      <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        質問登録ページ
      </h3>
    </div>
    <div class="border-t border-gray-200 container mx-auto items-center">
      <!-- フォーム送信 -->
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問項目名
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            寒いのが嫌だ
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問タグ
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            メンテナンス
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            回答
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス回答アドバイス
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問登録日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            1000/11/11
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            更新日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            100/11/11
          </dd>
        </div>
      </dl>
      <button type="submit" class="flex ml-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">送信</button>
  </div>
  <Footer/>
</div>
  </div>
</template>