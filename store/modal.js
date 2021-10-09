export const state = () => ({
    modal:false
})
export const mutations = {
    setModal(s,p){
        s.modal = p
    }
}

export const actions = {
    setModal({commit},p){
        commit('setModal',p)
    }
}

export const getters = {
    modal:s=>s.modal
}