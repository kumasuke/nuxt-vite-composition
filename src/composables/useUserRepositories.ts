import { ref } from '@nuxtjs/composition-api'
import userJson from '@/mock/user.json'
import useRepositories from './useRepositories'

interface UserData {
  gender: string
  name: [title: string, first: string, last: string]
}

interface UserDataResults {
  results: UserData[]
}

export default function () {
  const data = ref<UserData[] | UserData | null>(null)
  const { error, requesting, requestData } = useRepositories<UserDataResults>()

  async function fetchUser() {
    // const { results } = await requestData({
    //   method: 'GET',
    //   url: 'https://randomuser.me/api/',
    // })
    // data.value = results[0]
    // mock data
    const user = await Promise.resolve((userJson as unknown) as UserData)
    data.value = user
  }

  async function fetchUsers() {
    const { results } = await requestData({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=10',
    })
    data.value = results
  }

  return {
    data,
    error,
    fetching: requesting,
    fetchUser,
    fetchUsers,
  }
}
