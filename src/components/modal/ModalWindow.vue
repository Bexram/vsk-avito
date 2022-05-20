<template>
	<div id="modal" class="wrapper">
		<div class="modal">
			<button class="close" @click="closeModal">
				<img class="close__img" :src="require('/src/assets/modal/close.svg')" />
			</button>
			<div class="context">
				<slot name="context"> </slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalWindow',
	props: {
		open,
	},
	data() {
		return {}
	},
	mounted() {
		document.documentElement.style.overflow = 'hidden'
	},
	methods: {
		closeModal() {
			document.documentElement.style.overflow = 'auto'
			this.$emit('hide')
		},
	},
}
</script>

<style scoped>
.wrapper {
	z-index: 101;
	position: absolute;
	background: rgba(0, 0, 0, 0.6);
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
}

.modal {
	z-index: 101;
	opacity: 1;
	width: 589px;
	height: 140px;
	background: #ffffff;
	border: 0;
	border-radius: 20px;
}

.close {
	z-index: 104;
	position: relative;
	top: -6%;
	left: 102%;
	width: 3rem;
	height: 3rem;
	border: 0;
	background: rgba(0,0,0,0);
	display: flex;
	justify-content: center;
	align-items: center;

}

.context {
	margin-top: -3rem;
	position: relative;
	height: 100%;
	width: 100%;
}

@media (max-width: 428px) {
	.context {
		margin-top: -2rem;
	}

	.modal {
		width: 20rem;
		height: 10rem;
	}

	.close {
		top: -15%;
		left: 90%;
		width: 1.5rem;
		height: 1.5rem;
		box-sizing: border-box;
	}
	.close__img {
		width: 1rem;
		height: 1rem;
	}
}
</style>
