import { expect } from '@playwright/test'
import { test } from '../src/fixtures/fixture'
import { step } from 'allure-js-commons'

test('Увеличение количества выдаваемых товаров', async ({ pm }) => {
  await pm.mainPage.changePagination()
  await step('Проверка наличия попапа с crash bug...', async () => {
    await expect(pm.errorComponent.crushBugMessage).toContainText('crash bug')
  })
})

test('Битая картинка', async ({ pm }) => {
  await pm.mainPage.bugProductCardClick()
  await step('Проверка наличия попапа с Awesome...', async () => {
    await expect(pm.errorComponent.bugMessage).toContainText('Awesome')
  })
})

test('Смена валюты', async ({ pm }) => {
  await pm.mainPage.openProductPage()
  await pm.productPage.changeCurrency()
  await step('Проверка наличия попапа с crash bug...', async () => {
    await expect(pm.errorComponent.bugMessageProductPage).toContainText(
      'crash bug'
    )
  })
})

test('Отправка коммента', async ({ pm }) => {
  await pm.mainPage.openProductPage()
  await pm.productPage.postEmptyComment()
  await step('Проверка наличия попапа с crash bug...', async () => {
    await expect(pm.errorComponent.bugInfoOverlay).toContainText('crash bug')
  })
})

test('Раскрытие описания', async ({ pm }) => {
  await pm.mainPage.openProductPage()
  await pm.productPage.expandDescription()
  await step('Проверка наличия интерактивного попапа', async () => {
    await expect(pm.errorComponent.surveyBugPopup).toContainText(
      'The text should be in English language'
    )
  })
})

test('Фильтрация по цене', async ({ pm }) => {
  await pm.mainPage.openProductPage()
  await pm.productPage.enablePriceFilter()
  await step('Проверка наличия попапа с Awesome...', async () => {
    await expect(pm.errorComponent.bugMessage).toContainText('Awesome')
  })
})
